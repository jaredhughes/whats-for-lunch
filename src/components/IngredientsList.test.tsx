import React from 'react'
import { shallow } from 'enzyme'
import { IngredientsList } from './IngredientsList'

const data = ['sugar', 'eggs']

describe('IngredientsList.tsx', () => {
  it('renders heading', () => {
    const wrapper = shallow(<IngredientsList ingredients={data} />)
    const recipes = wrapper.find('.ingredients h4')
    expect(recipes.exists()).toBe(true)
    expect(recipes.text()).toBe('Ingredients')
  })

  it('renders list item for each ingredient', () => {
    const wrapper = shallow(<IngredientsList ingredients={data} />)

    expect(wrapper.find('li').length).toBe(2)
  })
})
