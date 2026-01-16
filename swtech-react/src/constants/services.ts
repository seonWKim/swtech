import { Monitor, Globe, Smartphone, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 'software',
    icon: Monitor,
    title: '응용 소프트웨어 개발',
    description: '비즈니스 요구사항에 맞춘 맞춤형 응용 소프트웨어를 설계하고 개발합니다.',
  },
  {
    id: 'web',
    icon: Globe,
    title: '웹 애플리케이션 개발',
    description: '최신 기술 스택을 활용한 반응형 웹 애플리케이션을 구축합니다.',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: '모바일 앱 개발',
    description: 'iOS 및 Android 플랫폼을 위한 네이티브 및 크로스플랫폼 앱을 개발합니다.',
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: '시스템 유지보수',
    description: '기존 시스템의 안정적인 운영을 위한 유지보수 및 기술 지원을 제공합니다.',
  },
];
