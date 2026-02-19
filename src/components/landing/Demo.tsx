import { Sparkles } from 'lucide-react';

const beforeNotes = [
  '- discussed budget need more $$ for marketing',
  '- john mentioned product launch maybe april??',
  '- hire 2 developers asap',
  '- sarah wants to rebrand dont forget',
  '- q1 goals revenue targets',
  '- check competitor pricing',
];

const afterSections = [
  {
    title: 'Budget & Finance',
    items: [
      'Increase marketing budget allocation',
      'Review competitor pricing strategy',
    ],
  },
  {
    title: 'Timeline & Milestones',
    items: ['Target product launch: April 2026'],
  },
  {
    title: 'Team & Hiring',
    items: ['Recruit 2 senior developers (Priority: High)'],
  },
  {
    title: 'Brand & Marketing',
    items: ['Initiate rebranding project with Sarah'],
  },
];

export function Demo() {
  return (
    <section id="demo" className="flex flex-col items-center bg-white py-[100px] px-20 gap-[60px]">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-5xl font-extrabold text-black text-center">
          AI-Powered Note Enhancement
        </h2>
        <p className="text-xl text-[#71717A] text-center">
          Watch how Atlas transforms your rough notes into organized, actionable content
        </p>
      </div>

      <div className="flex justify-center gap-10 w-full">
        {/* Before Card */}
        <div className="w-[540px] h-[600px] rounded-2xl bg-[#FAFAFA] border-2 border-[#E4E4E7] flex flex-col overflow-hidden">
          <div className="bg-[#F4F4F5] px-8 py-6 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <span className="text-sm font-semibold text-[#71717A]">Your notes + transcript</span>
                <h3 className="text-xl font-bold text-black">Meeting Notes - Q1 Planning</h3>
              </div>
              <div className="flex gap-1.5 shrink-0 mt-1">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-8">
            {beforeNotes.map((note) => (
              <p key={note} className="text-base text-black leading-[1.6]">{note}</p>
            ))}
          </div>
        </div>

        {/* After Card */}
        <div className="w-[540px] h-[600px] rounded-2xl bg-[#FAFAFA] border-2 border-[#E4E4E7] flex flex-col overflow-hidden">
          <div className="bg-[#F4F4F5] px-8 py-6 flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#6366F1]" />
                  <span className="text-sm font-semibold text-[#6366F1]">AI Enhancement</span>
                </div>
                <h3 className="text-xl font-bold text-black">Q1 Planning Meeting Summary</h3>
              </div>
              <div className="flex gap-1.5 shrink-0 mt-1">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8">
            {afterSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-2">
                <h4 className="text-base font-bold text-black">
                  {section.title}
                </h4>
                {section.items.map((item) => (
                  <p key={item} className="text-[15px] text-[#3F3F46] leading-[1.5]">
                    • {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
