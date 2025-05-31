// src/data/achievementsAndCertifications.ts

import crytoWorkshopImg from "../assets/cert/crytography-forensics-workshop.png";
import ctfImg from "../assets/cert/ctf.png";
import ctfHostImg from "../assets/cert/cybersecurityworkshop.jpeg";
import sihImg from "../assets/cert/smartindiahackathon.jpg";

import cehImg from "../assets/cert/Certifed-Ethical-Hacker.webp";
import ejptImg from "../assets/cert/ElearnSecurity-Juniour-penetration-Tester.webp";
import thmImg from "../assets/cert/thm.png";

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
    imageUrl: crytoWorkshopImg,
  },
  {
    title: "CTF Competition Winner",
    date: "2020",
    description:
      "First place in Capture The Flag competition organised by CyberHack at LPU, demonstrating advanced cybersecurity skills.",
    imageUrl: ctfImg,
  },
  {
    title: "Hosted and created CTF Challenges - multiple organizations",
    date: "2021-2023",
    description: "Designed and hosted CTF challenges for cybersecurity events across various organizations.",
    imageUrl: ctfHostImg,
  },
  {
    title: "Selected for Smart India Hackathon 2023 - National Levels",
    date: "2023",
    description:
      "Qualified and represented at the national level in Smart India Hackathon, Created a GUI based Portable Memory Dumping Forensics Tool using Python in 48 hours.",
    imageUrl: sihImg,
  },
];

export const certifications: Certification[] = [
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    imageUrl: cehImg,
    credentialUrl: cehImg,
  },
  {
    title: "ELearnSecurity Junior Penetraion Tester",
    issuer: "ELearnSecurity",
    date: "2022",
    imageUrl: ejptImg,
    credentialUrl: ejptImg,
  },
  {
    title: "Jr. Penetration Tester",
    issuer: "TryHackMe",
    date: "2023",
    imageUrl: thmImg,
    credentialUrl: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CXYLDEIQNR.png",
  },
];
