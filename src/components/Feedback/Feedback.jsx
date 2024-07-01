import s from './Feedback.module.css'
const Feedback = ({ feedback, total, positivePercentage }) => (
    <div className={s.feedback}>
        <h2 className={s.title}>Statistics</h2>
        <ul className={s.list_feedback}>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
);

export default Feedback;