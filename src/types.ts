export interface Slide {
  id: string;
  title: string;
  section?: string;
  component: React.FC;
}
