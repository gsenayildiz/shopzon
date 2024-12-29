
const Sorting = ({setSort}) => {
  return (
    <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
       <select onChange={(e) =>setSort(e.target.value)} className="bg-white-200 py-3 px-5 rounded-md" name="" id="">
        <option disabled>Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
       </select>
       </div>
  )
}

export default Sorting;