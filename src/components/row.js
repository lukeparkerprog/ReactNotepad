import React from 'react';

const Row = function (props) {
    return (
        <tr className="row">
            <td className="rowTitle rowItem"><a onClick={() => props.editNote(props.index)}>{props.title}</a></td>
            <td className='rowButton'><a onClick={() => props.removeNote(props.index)}>x</a></td>
        </tr>
    );
}


export default Row;
