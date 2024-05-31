import React from 'react';
import './check.css'

export default function Checkbox() {
  return (
    <div class="checkbox-wrapper-4 w-100">
  <input class="inp-cbx" id="morning" type="checkbox"/>
  <label class="cbx" for="morning"><span>
  <svg width="12px" height="10px">
    <use xlink:href="#check-4"></use>
  </svg></span><span >₹1000 to ₹2000</span></label>
  <svg class="inline-svg">
    <symbol id="check-4" viewbox="0 0 12 10">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
</div>
  )
}

