import Button from '@mui/material/Button';

export const Btn1 = ({ title, onClick, variant }) => {
    return (
        <Button variant={variant} onClick={onClick}>{title}</Button>
    )
}
