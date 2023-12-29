type MyProps = {
    title: string,
}

/**
 * Title Component 
 * 
 * @param {string} title
 * @returns {React.Component}
 */
const Title = ({title}: MyProps) => (
    <div className="text-black font-semibold my-2.5 mt-5">{title}</div>
);

export default Title