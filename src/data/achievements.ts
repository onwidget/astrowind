export interface Achievement {
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Speaker at Google Developer Club, LPU",
    date: "2023",
    description: "Took a workshop on Cryptography and Forensics CTF challenges.",
    imageUrl: "/cert/crytography-forensics-workshop.png",
  },
  {
    title: "CTF Competition Winner",
    date: "2020",
    description:
      "First place in Capture The Flag competition organised by CyberHack at LPU, demonstrating advanced cybersecurity skills.",
    imageUrl: "/cert/ctf.png",
  },
  {
    title: "Hosted and created CTF Challenges - multiple organizations",
    date: "2021-2023",
    description: "Designed and hosted CTF challenges for cybersecurity events across various organizations.",
    imageUrl: "/cert/cybersecurityworkshop.jpeg",
  },
  {
    title: "Selected for Smart India Hackathon 2023 - National Levels",
    date: "2023",
    description:
      "Qualified and represented at the national level in Smart India Hackathon, Created a GUI based Portable Memory Dumping Forensics Tool using Python in 48 hours.",
    imageUrl: "/cert/smartindiahackathon.jpg", // Optional, you can add a relevant image
  },
];

export const certifications: Certification[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    imageUrl: "/cert/Certifed-Ethical-Hacker.webp",
    credentialUrl: "/cert/Certifed-Ethical-Hacker.webp",
  },
  {
    title: "ELearnSecurity Junior Penetraion Tester",
    issuer: "ELearnSecurity",
    date: "2022",
    imageUrl: "/cert/ElearnSecurity-Juniour-penetration-Tester.webp",
    credentialUrl: "/cert/ElearnSecurity-Juniour-penetration-Tester.webp"
  },
  {
    title: "Jr. Penetration Tester",
    issuer: "TryHackMe",
    date: "2023",
    imageUrl: "/cert/thm.png",
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CXYLDEIQNR.png",
  },
];
