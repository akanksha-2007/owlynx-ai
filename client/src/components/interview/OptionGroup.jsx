// Accessible radio-card group. The real radio input is visually hidden
// (sr-only) so keyboard and screen-reader users still get normal radio behaviour.
export default function OptionGroup({
  legend,
  name,
  options,
  value,
  onChange,
  columns = 'sm:grid-cols-3',
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-slate-200">{legend}</legend>
      <div className={`mt-3 grid gap-3 ${columns}`}>
        {options.map(({ value: optionValue, label, description, icon: Icon }) => (
          <label key={optionValue} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={optionValue}
              checked={value === optionValue}
              onChange={() => onChange(optionValue)}
              className="peer sr-only"
            />
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30 peer-checked:border-indigo-400 peer-checked:bg-indigo-500/15 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-300">
              {Icon && <Icon size={22} className="mb-2 text-indigo-300" aria-hidden="true" />}
              <span className="block font-semibold">{label}</span>
              {description && (
                <span className="mt-1 block text-sm text-slate-400">{description}</span>
              )}
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  )
}