import Link from 'next/link';

type User = {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
};

interface FirstPostProps {
    data: User[];
}

const FirstPost: React.FC<FirstPostProps> = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <div key={item.id}>
                    <p>{item.firstname}</p>
                    <p>{item.firstname}</p>
                    <p>{item.age}</p>
                </div>
            ))}
            <Link href="/">Go back</Link>
        </>
    );
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/users');
    const data = await res.json();

    return { props: { data } };
}

export default FirstPost;
