import { LineChart, Line,XAxis ,YAxis} from 'recharts';

const Chart = () => {
    const mathMarksData = [
        { student: "Alice", marks: 85 },
        { student: "Bob", marks: 78 },
        { student: "Charlie", marks: 92 },
        { student: "David", marks: 65 },
        { student: "Eve", marks: 70 },
        { student: "Frank", marks: 88 },
        { student: "Grace", marks: 75 },
        { student: "Helen", marks: 82 },
        { student: "Ian", marks: 90 },
        { student: "Julia", marks: 79 }
      ];
    return (
        <div>
            <LineChart height={500} width={500} data={mathMarksData}>
            <XAxis dataKey="student" />
            <YAxis />
                <Line dataKey="marks"></Line>
            </LineChart>
        </div>
    );
};

export default Chart;