import { useState } from 'react';

export default function SurveySimulator2(){
    const [siVote, setSiVote] = useState(0);
    const [noVote, setNoVote] = useState(0);
    const [talVezVote, setTalVezVote] = useState(0);
    
    const [totalVotos, setTotalVotos] = useState(0);

    const porcentajeSi = totalVotos > 0 ? (siVote / totalVotos) * 100 : 0;
    const porcentajeNo = totalVotos > 0 ? (noVote / totalVotos) * 100 : 0;
    const porcentajeTalVez = totalVotos > 0 ? (talVezVote / totalVotos) * 100 : 0;

    function updateSiVote() {
        setSiVote(siVote + 1);
        setTotalVotos(totalVotos + 1);
    }

    function updateNoVote() {
        setNoVote(noVote + 1);
        setTotalVotos(totalVotos + 1);
    }

    function updateTalVezVote() {
        setTalVezVote(talVezVote + 1);
        setTotalVotos(totalVotos + 1);
    }

    

    return(
        
        <div>
            Numero de votos totales:{totalVotos}<br></br>
            <button onClick={updateSiVote}>Si vote</button>Si:{siVote}-{porcentajeSi.toFixed(2)}%
            <br></br>
            <button onClick={updateNoVote}>No vote</button>No:{noVote}-{porcentajeNo.toFixed(2)}%
            <br></br>
            <button onClick={updateTalVezVote}>TalVez vote</button>Talvez:{talVezVote}-{porcentajeTalVez.toFixed(2)}%
        </div>
    )
}