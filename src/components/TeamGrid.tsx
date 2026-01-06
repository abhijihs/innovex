import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import m1 from "@/members/m1.jpeg";
import m2 from "@/members/m2.jpeg";
import m3 from "@/members/m3.jpeg";
import m4 from "@/members/m4.jpeg";
import m5 from "@/members/m5.jpeg";
import m6 from "@/members/m6.jpeg";
import m7 from "@/members/m7.jpeg";
import m8 from "@/members/m8.jpeg";
import m9 from "@/members/m9.jpeg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "NISHA P R",
    role: "Captain",
    image: m1,
    instagram: "https://www.instagram.com/nisha._.rasheed?igsh=cGJjcm51ZXN0bTdy",
    linkedin: "https://www.linkedin.com/in/nisha-rasheed-568b42365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    name: "TESSA BENOY",
    role: "VICE CAPTAIN",
    image: m2,
    instagram: "https://www.instagram.com/tessa_benoy?igsh=MW83YWk1YmJ3ZGxyNQ==",
    linkedin: "https://www.linkedin.com/in/tessa-benoy-a3b4a6398?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 3,
    name: "BASIL SABU",
    role: "TEAM MEMBER",
    image: m3,
    instagram: "https://www.instagram.com/bas.il_sabu?igsh=MXU1MXE3dHdoMG12Yw==",
    linkedin: "https://www.linkedin.com/in/basil-sabu-7a5872292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 4,
    name: "ABHIJITH S",
    role: "TEAM MEMBER",
    image: m4,
    instagram: "https://www.instagram.com/abhi__jith47?igsh=ODV5eWtyZTJxM21n",
    linkedin: "https://www.linkedin.com/in/abhijith-s-539193295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: "DEVAN S",
    role: "TEAM MEMBER",
    image: m5,
    instagram: "",
    linkedin: "https://www.linkedin.com/in/devan05?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 6,
    name: "ABHIJITH PRADEEP",
    role: "TEAM MEMBER",
    image: m6,
    instagram: "https://www.instagram.com/abe__i_?igsh=MTkxc296cHpseDVpZg==",
    linkedin: "",
  },
  {
    id: 7,
    name: "ABNITHA SAN ROBY",
    role: "TEAM MEMBER",
    image: m7,
    instagram: "https://www.instagram.com/abibbi__?igsh=MWMxMWltdHV0bGdydQ==",
    linkedin: "https://www.linkedin.com/in/abnitha-san-roby?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 8,
    name: "RUEBEN JOSEPH REX",
    role: "TEAM MEMBER",
    image: m8,
    instagram: "https://www.instagram.com/okrue6en?igsh=MWt2b3FwOW0zcm9jdA==",
    linkedin: "https://www.linkedin.com/in/rueben-joseph-bb5a03323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    id: 9,
    name: "AJANNYA U",
    role: "TEAM MEMBER",
    image: m9,
    instagram: "https://www.instagram.com/_ajannya_?igsh=aXRncXluZXM3dXVz",
    linkedin: "",
  },
];

const TeamGrid = () => {
  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">{/* Background effects */}
      <div className="absolute inset-0">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-ember/10 via-blood/5 to-transparent opacity-50 animate-mystical-pulse" />
        
        {/* Side glows */}
        <div className="absolute top-1/4 left-0 w-64 h-96 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-64 h-96 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
      </div>

      {/* Floating embers in background */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 bg-ember/60 rounded-full animate-ember-float"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '0%',
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-ember/50" />
              <div className="w-1.5 h-1.5 bg-ember rounded-full animate-ember-glow" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-ember/50" />
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 text-glow">
            <span className="text-gradient-fire">Meet the Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
           
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              role={member.role}
              image={member.image}
              instagram={member.instagram}
              linkedin={member.linkedin}
              index={index}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 flex items-center justify-center gap-6"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
          <div className="relative">
            <div className="w-3 h-3 bg-ember/50 rounded-full animate-ember-glow" />
            <div className="absolute inset-0 w-3 h-3 bg-ember/30 rounded-full animate-ping" />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;