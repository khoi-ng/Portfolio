import {
  useProjectContext,
  setProjectViewStorage,
} from '../../../util/context';
import { MdViewList, MdViewModule } from 'react-icons/md';
import './ViewModeToggleBtn.scss';

const ViewModeToggleBtn = () => {
  const [viewMode, setViewMode] = useProjectContext();

  return (
    <span className='viewToogle'>
      <div
        className={
          viewMode !== 'ListView' ? 'toggleListView' : 'toggleListView active'
        }
        onClick={() => {
          if (viewMode !== 'ListView') {
            setViewMode(setProjectViewStorage('ListView'));
          }
        }}
      >
        <MdViewList />
      </div>
      <div
        className={
          viewMode !== 'GalleryView' ? 'toggleGalery' : 'toggleGalery active'
        }
        onClick={() => {
          if (viewMode !== 'GalleryView') {
            setViewMode(setProjectViewStorage('GalleryView'));
          }
        }}
      >
        <MdViewModule />
      </div>
    </span>
  );
};

export default ViewModeToggleBtn;
