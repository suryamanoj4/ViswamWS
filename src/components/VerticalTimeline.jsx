import React from 'react';
import { CheckCircle } from 'lucide-react';

const timelineData = [
  {
    year: '2024',
    title: 'Establish',
    description: 'Centres of Excellence, Skilling, Training, Incubators, Accelerators, Conferences'
  },
  {
    year: '2026',
    title: 'Grow',
    description: 'Talent Pool, Products, Startups, Research Institutes, AI Services across the value chain'
  },
  {
    year: '2028',
    title: 'Consolidate',
    description: 'Foundational Research, AI Services at the higher end of the value chain'
  },
  {
    year: '2030',
    title: 'Lead',
    description: 'Global South AI Hub, Foundational Models, Integrate AI across domains, Thought Leadership'
  }
];

const TimelineItem = ({ year, title, description, isLast }) => (
  <div className="relative flex gap-6">
    {/* Left side with year and icon */}
    <div className="flex-none relative flex flex-col items-center">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-white" />
      </div>
      {!isLast && (
        <div className="absolute top-12 bottom-0 left-1/2 w-0.5 -ml-px bg-gray-200" />
      )}
    </div>

    {/* Right side with content */}
    <div className="flex-1 pb-12">
      <div className="font-bold text-2xl mb-1 flex items-center gap-2">
        {year}: {title}
      </div>
      <p className="text-gray-600 text-lg">
        {description}
      </p>
    </div>
  </div>
);

const VerticalTimeline = () => (
  <div className="max-w-3xl mx-auto py-12">
    <h1 className="text-4xl font-bold mb-12 text-center">Our Roadmap</h1>
    <div className="space-y-0">
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={item.year}
          {...item}
          isLast={index === timelineData.length - 1}
        />
      ))}
    </div>
  </div>
);

export default VerticalTimeline;