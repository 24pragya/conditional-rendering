import React, { useEffect }from 'react'
import {useState} from 'react'
import {Button, Space } from 'antd';

function AddCondition({condition_formatting,disableAddCondition, setDisableAddCondition, select_column, select_condition, select_value, select_from, select_to}) {

    useEffect(() => {
        if ((condition_formatting.select_column !== "" && condition_formatting.select_condition !== "" && condition_formatting.select_value !== "" && condition_formatting.select_from === "" && condition_formatting.select_to === "") || (condition_formatting.select_column !== "" && condition_formatting.select_condition !== "" && condition_formatting.select_from !== "" && condition_formatting.select_to !== "" && condition_formatting.select_value === "")) {
            setDisableAddCondition(false)
          }
    },[condition_formatting.select_column,condition_formatting.select_condition, condition_formatting.select_value,condition_formatting.select_from,condition_formatting.select_to])

    const handleClick = () => {
        console.log(condition_formatting)
      }

  return (
    <div>
        <Space wrap>
              <Button type="primary" disabled={disableAddCondition} onClick={handleClick}>Add Condition</Button>
            </Space>
    </div>
  )
}

export default AddCondition