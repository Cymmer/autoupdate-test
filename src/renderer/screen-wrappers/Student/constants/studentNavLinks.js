export const studentNavLinkTypes = {
  circular: 'circular',
};

const studentNavLinks = [
  {
    id: 'activitiesNavLink',
    text: 'Activities',
    icon: 'format_list_numbered',
    to: '/student/home',
  },
  {
    id: 'classesNavLink',
    text: 'Classes',
    icon: 'school',
    to: '/student/classes',
  },
  {
    id: 'viewStoreNavLink',
    icon: 'store',
    to: '/student/shop',
    type: studentNavLinkTypes.circular,
    // Note: A special menu item which will be displayed in mobile navbar only.
  },
  {
    id: 'playgroundNavLink',
    text: 'Playground',
    icon: 'code',
    to: '/playground',
  },
];

export default studentNavLinks;
