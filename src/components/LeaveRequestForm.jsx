import React, { useState } from 'react';
import axios from 'axios';

const LeaveRequestForm = () => {
  const [leaveType, setLeaveType] = useState('vacation');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate || !reason) {
      setMessage('Бүх талбарыг бөглөнө үү.');
      return;
    }

    const leaveRequest = {
      leaveType,
      startDate,
      endDate,
      reason,
    };

    try {
      await axios.post('http://localhost:5000/api/leaveRequests', leaveRequest);
      setMessage('Таны чөлөөний хүсэлт амжилттай илгээгдлээ.');
      setStartDate('');
      setEndDate('');
      setReason('');
    } catch (error) {
      setMessage('Алдаа гарлаа. Дахин оролдоно уу.');
    }
  };

  return (
    <div className="leave-request-form">
      <h2>Чөлөөний хүсэлт илгээх</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Чөлөөний төрөл:</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
          <option value="vacation">Амралт</option>
          <option value="sick">Өвчтэй</option>
        </select>

        <label>Эхлэх огноо:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>Дуусах огноо:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Шалтгаан:</label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows="4"
          placeholder="Чөлөөний шалтгаан бичнэ үү..."
        ></textarea>

        <button type="submit">Хүсэлт илгээх</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;
