
import IconArrowDown from '../../assets/icon-arrow-down.svg';
// import IconArrowUp from '../../assets/icon-arrow-up.svg';
import IconCalendar from '../../assets/icon-calendar.svg';
import IconPlanning from '../../assets/icon-planning.svg';
import IconReminder from '../../assets/icon-reminders.svg';
import IconTodo from '../../assets/icon-todo.svg';

export const MenuModel = [
    {
        name: 'Features',
        link: '#features',
        active: false,
        icon: IconArrowDown,
        subMenu: [
            { name: 'Todo List', link: '#todo', icon: IconTodo },
            { name: 'Calendar', link: '#calendar', icon: IconCalendar },
            { name: 'Reminder', link: '#reminder', icon: IconReminder },
            { name: 'Planning', link: '#planning', icon: IconPlanning },
        ],
    },
    {
        name: 'Company',
        link: '#company',
        icon: IconArrowDown,
        active: false,
        subMenu: [
            { name: 'History', link: '#history', icon: null },
            { name: 'Our Team', link: '#ourteams', icon: null },
            { name: 'Blog', link: '#blog', icon: null },
        ],
    },
    { name: 'Careers', link: '#careers', subMenu: null, icon: null },
    { name: 'About', link: '#about', subMenu: null, icon: null },
];

export default MenuModel;
