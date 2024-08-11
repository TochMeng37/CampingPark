import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconSunset2,
  IconChefHat,
  IconHeart,
  IconHelp,
  IconHeartBolt,
  IconFlower,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: " ម្ហូបអាហារមិនបាច់ទិញពីក្រោមក៏បាន",
      description:
        "រាល់បន្លែដែលបានថែរក្សាដាំដុះពីកសិដ្ឋានជាតម្រូវការក្នុងការផ្គត់ផ្គងទៅដល់ភោជនីយដ្ឋានរបស់ពួកយើងដើម្បីអោយបងប្អូនបានទទួលទាននិងសាករសជាតិធម្មជាតិពិតៗនៅ ឧទ្យានបោះតង់",
      icon: <IconFlower />,
    },
    {
      title: "ភោជនីយដ្ឋានមានលក់អាហារបីពេល ហាងកាហ្វេក៏ដូចជាមីនីម៉ាត",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <  IconChefHat/>,
    },
    {
      title: "ខែបោះតង់មើលថ្ងៃលិច",
      description:
        " កំពុងពេញនិយមខ្លាំងបំផុតនៅឧទ្យានបោះតង់ក្នុងរដូវនេះ ល្ងាចឡើងត្រជាក់ៗអង្គុយអាំងភ្លើង ញំាគោឡើងភ្នំក្តៅហ៊ុយៗ",
      icon: <IconSunset2 />,
    },
    {
      title: "ទោះបីជាខែវស្សា ធ្លាក់ភ្លៀងបន្តិចមែន",
      description: "ប៉ុន្តែសម្រាប់បងប្អូនដែរបានមកលេងឧទ្យានបោះតង់នៅតែពេញចិត្ត",
      icon: <IconCloud />,
    },
    {
      title: "ឧទ្យានបោះតង់បៀបបានដូចជាឋានសួគ៍",
      description: "សមុទ្រពពក, កន្លែងបំបាត់នៅស្ត្រេស ទុក្ខកង្វល់ បង្កើតនៅស្នាមញញឹមនិងភាពរីករាយដល់អ្នកទាំងអស់គ្នា",
      icon: <IconHeartBolt />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
