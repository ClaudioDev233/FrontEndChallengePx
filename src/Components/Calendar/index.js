import {
  CalendarContent,
  CalendarHeader,
  CalendarBody,
  TD,
  TH,
  Title,
  Arrow,
  Bar,
  Progress,
  ProgressBar,
  Percentage,
  ArrowUp,
  InsideProgress,
} from "./styles";
import Moment from "react-moment";
import moment from "moment";
import { useState, useEffect } from "react";
export default function Calendar() {
  return (
    <>
      <CalendarContent>
        <CalendarHeader>
          <Arrow> &lt; </Arrow>
          <Title>Fevereiro</Title>
          <Arrow> &gt; </Arrow>
        </CalendarHeader>
        <CalendarBody>
          <table>
            <thead>
              <tr>
                <TH>S</TH>
                <TH>T</TH>
                <TH>Q</TH>
                <TH>Q</TH>
                <TH>S</TH>
                <TH>S</TH>
                <TH day="Sunday">D</TH>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TD
                  day="OtherMonth"
                  onClick={(e) => console.log(e.target.textContent)}
                >
                  31
                </TD>
                <TD>1</TD>
                <TD>2</TD>
                <TD>3</TD>
                <TD>4</TD>
                <TD>5</TD>
                <TD day="Sunday">6</TD>
              </tr>
              <tr>
                <TD>7</TD>
                <TD>8</TD>
                <TD>9</TD>
                <TD>10</TD>
                <TD>11</TD>
                <TD>12</TD>
                <TD day="Sunday">13</TD>
              </tr>
              <tr>
                <TD>14</TD>
                <TD>15</TD>
                <TD>16</TD>
                <TD>17</TD>
                <TD>18</TD>
                <TD>19</TD>
                <TD day="Sunday">20</TD>
              </tr>
              <tr>
                <TD>21</TD>
                <TD>22</TD>
                <TD>23</TD>
                <TD>24</TD>
                <TD>25</TD>
                <TD>26</TD>
                <TD day="Sunday">27</TD>
              </tr>
              <tr>
                <TD>28</TD>
                <TD day="OtherMonth">1</TD>
                <TD day="OtherMonth">2</TD>
                <TD day="OtherMonth">3</TD>
                <TD day="OtherMonth">4</TD>
                <TD day="OtherMonth">5</TD>
                <TD day="Sunday">6</TD>
              </tr>
            </tbody>
          </table>
        </CalendarBody>
        <ProgressBar>
          <Bar>
            <Progress></Progress>
          </Bar>
          <InsideProgress>
            <ArrowUp />
            <Percentage>25%</Percentage>
          </InsideProgress>
        </ProgressBar>
      </CalendarContent>
    </>
  );
}
