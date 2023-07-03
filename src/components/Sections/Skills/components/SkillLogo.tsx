import { IconType } from 'react-icons/lib/esm/iconBase';
interface SkillLogoProps {
	logo: IconType;
	color?: string;
}

export default function SkillLogo({ logo: IconComponent, color }: SkillLogoProps) {
	return <div className="m-auto p-1"> <IconComponent size="100%" color={color} /> </div>;
}