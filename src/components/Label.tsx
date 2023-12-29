type MyProps = {
    title: string,
    required?: boolean
}

/**
 * Label for Forms fields 
 * 
 * @param {string} title
 * @param {string} required - (optional) puts a asteric 
 * @returns 
 */

const Label = ({title, required}: MyProps) => (
    <div className="dark:text-gray-300 text-black text-xs font-normal">{title} <span className="text-xs">{required && '*'}</span></div>
);

export default Label