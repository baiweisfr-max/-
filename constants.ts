import { Server, Shield, Zap, Globe, Cpu, Clock } from 'lucide-react';
import { Feature, PricingTier, Testimonial } from './types';

export const NAV_LINKS = [
  { label: '功能特性', href: '#features' },
  { label: '解决方案', href: '#solutions' },
  { label: '价格方案', href: '#pricing' },
  { label: '文档', href: '#docs' },
];

export const FEATURES: Feature[] = [
  {
    title: '弹性伸缩',
    description: '根据流量自动调整资源，秒级响应，只需为您使用的资源付费。',
    icon: Zap,
  },
  {
    title: '全球节点',
    description: '覆盖全球 30+ 个区域的数据中心，让您的应用贴近每一位用户。',
    icon: Globe,
  },
  {
    title: '企业级安全',
    description: '内置 DDoS 防护、WAF 和自动合规审计，全方位守护数据安全。',
    icon: Shield,
  },
  {
    title: '全托管运维',
    description: '免去基础设施维护烦恼，自动补丁更新，SLA 保证 99.99%。',
    icon: Server,
  },
  {
    title: '高性能计算',
    description: '搭载最新一代 CPU 和 NVMe SSD，提供极致的 I/O 吞吐能力。',
    icon: Cpu,
  },
  {
    title: '7x24小时支持',
    description: '专业技术团队全天候待命，平均响应时间小于 15 分钟。',
    icon: Clock,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: '开发者版',
    price: '¥99',
    period: '/月',
    description: '适合个人项目和初创团队',
    features: ['1 vCPU / 2GB RAM', '50GB SSD 存储', '1TB 流量/月', '社区支持', '自动备份 (每日)'],
    cta: '免费试用',
    highlight: false,
  },
  {
    name: '专业版',
    price: '¥399',
    period: '/月',
    description: '适合高速增长的业务应用',
    features: ['4 vCPU / 8GB RAM', '200GB NVMe 存储', '5TB 流量/月', '优先邮件支持', '自动备份 (每小时)', '负载均衡器'],
    cta: '立即升级',
    highlight: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '适合大规模关键任务部署',
    features: ['无限 vCPU 扩展', 'PB 级对象存储', '无限流量', '专属客户经理', 'SLA 99.99% 赔付保障', '私有网络 VPC'],
    cta: '联系销售',
    highlight: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    content: "NebulaCloud 让我们完全从运维琐事中解放出来，团队可以将 100% 的精力投入到产品创新中。迁移过程无比顺滑！",
    author: "李明",
    role: "CTO",
    company: "FutureTech Inc.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    content: "他们的自动扩缩容功能简直是救星。在上次的大促活动中，系统自动承受了 10 倍的流量洪峰，没有任何卡顿。",
    author: "Sarah Chen",
    role: "首席架构师",
    company: "GlobalShop",
    avatar: "https://picsum.photos/100/100?random=2"
  }
];
