import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Col, Row } from 'antd';
import { Input } from 'antd';


const Container = ({condition_formatting, setCondition_formating, enable_disable_col, setEnable_disable_col, setSelectOption, selectOption, enable_disable_condition, setEnable_disable_condition, isBetween, setIsBetween, showValue, setshowValue, selectCondition, setSelectCondition}) => {


  const selectColumnHandler = (value) => {
    setCondition_formating({
      ...condition_formatting, select_column: value
    })
  }

  const selectConditionType = (value) => {
    setCondition_formating({
      ...condition_formatting, select_condition_type: value
    })
  }

  useEffect(() => {
    if (condition_formatting.select_condition !== "") {
        console.log("enter");
      setSelectCondition(false);
    }
    
    if (condition_formatting.select_column !== "") {
        setEnable_disable_col(false);
    }
    
    if (condition_formatting.select_condition !== "") {
        setEnable_disable_condition(false);
    }

    if (condition_formatting.select_condition === "in between") {
      setIsBetween(true)
    }
    else if (condition_formatting.select_column !== "" && condition_formatting.select_condition !== "in between" && condition_formatting.select_condition !== "") {
      setshowValue(true);
    }
    else {

      setIsBetween(false)
    }
   
    if (condition_formatting.select_column === "Quantity" || condition_formatting.select_column === "Profit") {
      setSelectOption(quantity_options)

    }
    else {
      setSelectOption(in_notin)
    }


  }, [condition_formatting.select_column,condition_formatting.select_condition])


  const selectConditionHandler = (value) => {
    console.log(condition_formatting);

    setCondition_formating({
      ...condition_formatting, select_condition: value
    })

  }
  const setValue = (e) => {
    console.log(e.target.value)
    setCondition_formating({ ...condition_formatting, select_value: e.target.value })
  }

  const from = (value) => {
    console.log(value)
    setCondition_formating({ ...condition_formatting, select_from: value })
  }

  const To = (value) => {
    console.log(value)
    setCondition_formating({ ...condition_formatting, select_to: value })
  }

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const options = [
    {
      value: 'Quantity',
      label: 'Quantity',
    },
    {
      value: 'Postal Code',
      label: 'Postal Code',
    },
    {
      value: 'Profit',
      label: 'Profit',
    },
    {
      value: 'Country',
      label: 'Country',
    },
    {
      value: 'Product Name',
      label: 'Product Name',
    },
    {
      value: 'Month',
      label: 'Month',
    }
  ]
  const quantity_options = [
    {
      value: 'is equal to',
      label: 'is equal to'
    },
    {
      value: 'is less than',
      label: 'is less than'
    },
    {
      value: 'is less than equal to',
      label: 'is less than equal to'
    },
    {
      value: 'is greater than',
      label: 'is greater than'
    },
    {
      value: 'is greater than equal to',
      label: 'is greater than equal to'
    },
    {
      value: 'in between',
      label: 'in between'
    }
  ];
  const min_max = [
    {
      value: 'minimum',
      label: 'minimum'
    },
    {
      value: 'maximum',
      label: 'maximum'
    }
  ];
  const in_notin = [
    {
      value: "in",
      label: "in"
    },
    {
      value: "not in",
      label: "not in"
    }
  ]

  return (
    <div>
      <Row>
        <Col span={12}>
          <div>

            <label>Select Column (Format By)</label>

            <Select
              showSearch
              placeholder="Select"
              style={{ width: '100%' }}
              optionFilterProp="children"
              onChange={selectColumnHandler}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={options}
            />
          </div>

          {<div>
            <label>Select Condition</label>
            <Select
              showSearch
              placeholder="Select"
              disabled={enable_disable_col}
              style={{ width: '100%' }}
              optionFilterProp="children"
              onChange={selectConditionHandler}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }

              options={selectOption}
            />

          </div>}

          {selectCondition ? <div>
            <label>Select Condition Type</label>
            <Select
              showSearch
              placeholder="Select"
              disabled={enable_disable_condition}
              style={{ width: '100%' }}
              optionFilterProp="children"
              onChange={selectConditionType}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
            />

          </div> : ""}

          <div>
            {
              isBetween ?
                <div>
                  <label>From</label>

                  <Select
                    showSearch
                    placeholder="Select"
                    style={{ width: '50%' }}
                    optionFilterProp="children"
                    onChange={from}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={min_max}
                  />
                  <label>To</label>

                  <Select
                    showSearch
                    placeholder="Select"
                    style={{ width: '50%' }}
                    optionFilterProp="children"
                    onChange={To}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={min_max}
                  />
                </div> :
                null
            }

            {
              !isBetween && showValue ? <div>
                <label>value</label>
                <Input type="number" placeholder="Enter your value" onChange={setValue} />
              </div> : null
            }

          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Container