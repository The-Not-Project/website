import Link from "next/link";
import { BoroughSelectionContainer } from "./boroughSelection.styles";
import { BoroughSummaries } from '@/app/constants/boroughs';

export default function BoroughSelectionComponent({ borough }: { borough: string }) {

  
  return (
    <BoroughSelectionContainer>
      <ul>
        {Object.entries(BoroughSummaries).map(([key, value]) => (
            <li
              key={key}
                className={borough === value.fileName ? 'active' : ''}
            >
              <Link href={`/stories/${value.fileName}`}>
                {value.borough}
              </Link>
            </li>
        ))}
        
      </ul>
    </BoroughSelectionContainer>
  );
}
