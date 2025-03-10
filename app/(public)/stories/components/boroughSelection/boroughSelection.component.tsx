import { useAppContext } from "@/app/contexts/public-app-actions";
import { BoroughSelectionContainer } from "./boroughSelection.styles";
import { BoroughSummaries } from '@/app/constants/boroughs';

export default function BoroughSelectionComponent() {

    const { currentBorough, setCurrentBorough } = useAppContext();
  
  return (
    <BoroughSelectionContainer>
      <ul>
        {Object.entries(BoroughSummaries).map(([key, value]) => (
            <li
              key={key}
                onClick={() => setCurrentBorough(value)}
                className={currentBorough.fileName === value.fileName ? 'active' : ''}
            >
                {value.borough}
            </li>
        ))}
        
      </ul>
    </BoroughSelectionContainer>
  );
}
