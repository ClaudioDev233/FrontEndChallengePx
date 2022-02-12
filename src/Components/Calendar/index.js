import { CalendarContent, CalendarHeader, CalendarBody } from "./styles";
import Moment from "react-moment";
import moment from "moment";
import { useState, useEffect } from "react";
export default function Calendar() {
  return (
    <>
      <CalendarContent>
        <CalendarHeader>
          <input type="button" value="<" />
          <p>Fevereiro</p>
          <input type="button" value=">" />
        </CalendarHeader>
        <CalendarBody>
          <table>
            <thead>
              <tr>
                <th>S</th>
                <th>T</th>
                <th>Q</th>
                <th>Q</th>
                <th>S</th>
                <th>S</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td onClick={(e) => console.log(e.target.textContent)}>31</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>14</td>
                <td>15</td>
                <td>16</td>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td>20</td>
              </tr>
              <tr>
                <td>21</td>
                <td>22</td>
                <td>23</td>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
              </tr>
              <tr>
                <td>28</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>
            </tbody>
          </table>
        </CalendarBody>
      </CalendarContent>
    </>
  );
}
