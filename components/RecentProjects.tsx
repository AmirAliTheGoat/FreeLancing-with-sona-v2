import React from 'react';
import { PROJECTS } from '../constants';
import { Button } from './ui/Button';

const RecentProjects: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="stories">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div>
              <h2 className="text-3xl font-bold text-[#2e1065] mb-2">داستان‌ها</h2>
              <p className="text-gray-500 font-light">مسیر موفقیت دیگران را ببینید.</p>
           </div>
           <Button variant="outline" size="sm" className="rounded-lg">
             همه داستان‌ها
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-violet-50/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-violet-100 transition-all duration-300 border border-transparent hover:border-violet-100">
               <div className="flex justify-between items-start mb-8">
                 <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 text-lg font-bold text-gray-400">
                        {project.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#2e1065]">{project.company}</h3>
                      <p className="text-xs text-gray-500 mt-1">{project.type}</p>
                    </div>
                 </div>
                 <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${project.color.replace('text', 'bg').replace('50', '100')} ${project.color}`}>
                    {project.salary}
                 </span>
               </div>

               <div className="mb-8">
                 <p className="text-gray-600 font-light leading-relaxed">
                    با موفقیت مراحل {project.tags[0]} را طی کرده و اکنون به درآمد پایدار ارزی رسیده است.
                 </p>
               </div>

               <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full group-hover:border-violet-200 group-hover:text-violet-700 transition-colors">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;