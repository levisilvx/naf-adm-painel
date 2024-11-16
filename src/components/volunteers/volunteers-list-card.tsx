import { VolunteersListItem } from "./volunteers list-item";

export function VolunteersListCard() {
  return (
    <div>
      <div className="md:p-10">
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
          <VolunteersListItem />
      </div>
    </div>
  );
}