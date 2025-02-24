import { BoroughsList, BoroughsListItem } from './boroughsList.styles';

export default function Page() {
  return (
    <>
      <BoroughsList>
        <BoroughsListItem $name="manhattan" />
        <BoroughsListItem $name="queens" />
        <BoroughsListItem $name="brooklyn" />
        <BoroughsListItem $name="bronx" />
        <BoroughsListItem $name="staten_island" />
      </BoroughsList>
    </>
  );
}
