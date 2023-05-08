import classNames from 'classnames-ts';
import { HTMLAttributes } from 'react';
import { IconType } from 'react-icons';

type IconInfoProps = HTMLAttributes<HTMLDivElement> & {
  text: string;
  icon: IconType;
  className?: string;
};

export const IconInfo = ({ icon, text, className, ...rest }: IconInfoProps) => {
  const finalClassNames = classNames(
    'p-1 w-full flex gap-2 items-center align-middle center-content',
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {icon({ className: 'text-rbgblue text-xl leading-none' })}
      <span className='text-small text-gray-600 font-semibold leading-none'>{text}</span>
    </div>
  );
};
