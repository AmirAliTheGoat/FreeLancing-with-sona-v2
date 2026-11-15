import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  count: string;
  icon: LucideIcon;
  color: string;
}

export interface ProjectItem {
  id: number;
  company: string;
  role: string;
  type: string;
  logo: string;
  tags: string[];
  salary?: string; // or budget
  postedTime: string;
  color: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  image: string;
}

export interface StatData {
  name: string;
  value: number;
}

export interface PricingPackage {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string[];
}
