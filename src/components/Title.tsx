type MyProps = {
    title: string,
    required?: boolean
}

const Title = ({title, required}: MyProps) => (
    <div className="text-black text-sm font-normal"><span className="text-red-500 text-lg">{required && '*'}</span>{title}</div>
);

export default Title