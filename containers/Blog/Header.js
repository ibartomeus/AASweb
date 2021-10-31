import { CoverImage } from './CoverImage';
import { Title } from './Title';
import { formatDate } from '../../lib/utils';

export const Header = ({ title, coverImage, date, author }) => (
  <>
    <Title>{title}</Title>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} src={coverImage} height={620} width={1240} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 text-lg">{formatDate(date)}</div>
    </div>
  </>
);
