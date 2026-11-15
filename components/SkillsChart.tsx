import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';

const data = [
  { name: 'ماه ۱', students: 5, earnings: 200 },
  { name: 'ماه ۲', students: 12, earnings: 800 },
  { name: 'ماه ۳', students: 25, earnings: 2500 },
  { name: 'ماه ۴', students: 38, earnings: 4500 },
  { name: 'ماه ۵', students: 55, earnings: 8000 },
  { name: 'ماه ۶', students: 80, earnings: 12000 },
];

const SkillsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] bg-white rounded-xl p-6 border border-violet-100 shadow-sm">
      <h3 className="text-lg font-bold text-[#2e1065] mb-6">رشد جامعه دانشجویان</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#6b7280', fontFamily: 'Vazirmatn' }} 
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#6b7280', fontFamily: 'Vazirmatn' }} 
          />
          <Tooltip 
            cursor={{ fill: '#fdfbf7' }}
            contentStyle={{ 
                borderRadius: '12px', 
                border: 'none', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#2e1065',
                color: '#fff'
            }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#a78bfa', marginBottom: '0.5rem' }}
          />
          <Bar 
            dataKey="earnings" 
            name="درآمد (دلار)" 
            fill="#f97316" // Orange
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
          <Bar 
            dataKey="students" 
            name="دانشجویان فعال" 
            fill="#db2777" // Pink/Magenta
            radius={[4, 4, 0, 0]} 
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;