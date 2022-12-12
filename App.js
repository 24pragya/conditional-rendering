import React, {useState} from 'react'
import Container from './Container'
import AddCondition from './AddCondition'
import AllValue from './AllValue'

function App() {

  const [condition_formatting, setCondition_formating] = useState({
    select_column: "",
    select_condition: "",
    select_condition_type: "value",
    select_value: "",
    select_from: "",
    select_to: "",
    select_inBetween: ""
  })

  const [enable_disable_col, setEnable_disable_col] = useState(true);
  const [enable_disable_condition, setEnable_disable_condition] = useState(true);
  const [disableAddCondition, setDisableAddCondition] = useState(true);
  const [isBetween, setIsBetween] = useState(false);
  const [showValue, setshowValue] = useState(false);
  const [selectCondition, setSelectCondition] = useState(true);
  const [selectOption, setSelectOption] = useState([]);
  return (
    <div>

      <Container condition_formatting={condition_formatting} setCondition_formating={setCondition_formating} enable_disable_col={enable_disable_col} setEnable_disable_col={setEnable_disable_col} enable_disable_condition={enable_disable_condition} setEnable_disable_condition={setEnable_disable_condition} isBetween={isBetween} setIsBetween={setIsBetween} showValue={showValue} setshowValue={setshowValue} selectCondition={selectCondition} setSelectCondition={setSelectCondition} selectOption={selectOption} setSelectOption={setSelectOption} />

      <AddCondition condition_formatting={condition_formatting} setCondition_formating={setCondition_formating} disableAddCondition={disableAddCondition} setDisableAddCondition={setDisableAddCondition} />

      <AllValue isBetween={isBetween} select_column={condition_formatting.select_column} select_condition={condition_formatting.select_condition} select_condition_type={condition_formatting.select_condition_type} select_from={condition_formatting.select_from}  select_to={condition_formatting.select_to} select_value={condition_formatting.select_value}/>
    </div>
  )
}

export default App