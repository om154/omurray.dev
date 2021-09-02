import { ChildrenProp } from '../../utils/props';

const Pill = ({ children }: ChildrenProp) => (
  <span className="inline-block px-3 py-2 font-bold rounded-lg shadow-md bg-white text-primary-900">
    <div className="flex items-center my-1">
      {children}
    </div>
  </span>
);

export default Pill;
