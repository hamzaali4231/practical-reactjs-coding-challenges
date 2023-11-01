import './index.css'

const Checkbox = ({ key, id, label, checked, name, onChange,  }:any) => {

  return (
    <div className="checkbox-wrapper">
      <input multiple key={id} id={id} type="checkbox" checked={checked} name={name} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
