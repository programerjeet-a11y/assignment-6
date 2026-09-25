export default function SortDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="library-tools">
      <span className="sort-label">Sort by</span>
      <select
        className="sort-select"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="duration">Duration</option>
        <option value="caloriesBurned">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </label>
  );
}
