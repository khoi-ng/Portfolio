import { motion } from 'framer-motion';
import './Sidebar.scss';

interface SideBarProps {
  open: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarButton: React.FC<SideBarProps> = ({ open, setOpenSidebar }) => {
  return (
    <motion.button
      className='sidebar-toggle-btn'
      onClick={() => setOpenSidebar((prev: boolean) => !prev)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={'closed'}
      animate={open ? 'open' : 'closed'}
      style={open ? { backgroundColor: 'transparent' } : {}}
    >
      <svg width='23' height='23' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        {!open && (
          <motion.path
            strokeWidth='3'
            stroke='black'
            strokeLinecap='round'
            d='M 2 9.423 L 20 9.423'
          />
        )}
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

const Sidebar = ({ open, items }: { open: boolean; items: string[] }) => {
  const variantsBackground = {
    open: {
      clipPath: 'circle(1100px at 250px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
      },
    },
    closed: {
      clipPath: 'circle(30px at 334px 50px)',
      transition: {
        delay: 1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variantsLinks = {
    open: {
      transition: { staggerChildren: 0.05 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const variantsItems = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='background-sidebar' variants={variantsBackground}>
        <motion.ul className='sidebar-items ' variants={variantsLinks}>
          {items.map((navlink) => (
            <motion.a
              variants={variantsItems}
              key={`sidebar-item-${navlink}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={'sidebar-Link'}
              href={`#${navlink}`}
            >
              {navlink}
            </motion.a>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export { SidebarButton, Sidebar };
