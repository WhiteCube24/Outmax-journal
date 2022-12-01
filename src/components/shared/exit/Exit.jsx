import './Exit.scss'

const Exit = ({position, component}) => {

    let exitClass = 'exit'
    if(position === 'right') {
        exitClass += ' exit-right'
    } else if(position === 'left' && component === 'nav') {
        exitClass += ' exit-left exit-position'
    } else {
        exitClass += ' exit-left'
    }

    return (
        <div className={exitClass}>Выйти</div>
    )
}

export default Exit;