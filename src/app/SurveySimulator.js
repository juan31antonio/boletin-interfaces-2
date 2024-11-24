import { useState } from 'react';

export default function SurveySimulator(){
    const [siVote, setSiVote] = useState(0); 
    const [noVote, setNoVote] = useState(0); 
    const [talVezVote, setTalVezVote] = useState(0); 
    return(
        
        <div>
            <button onClick={() => setSiVote(siVote + 1)}>Si vote</button>Si:{siVote}
            <br></br>
            <button onClick={() => setNoVote(noVote + 1)}>No vote</button>No:{noVote}
            <br></br>
            <button onClick={() => setTalVezVote(talVezVote + 1)}>TalVez vote</button>Talvez:{talVezVote}
        </div>
    )
}