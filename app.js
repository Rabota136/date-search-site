const { useState } = React;
const { Search, CheckCircle, AlertCircle, User, Calendar, MapPin, FileText, Building } = lucide;

const DocumentVerificationSystem = () => {
  const [currentPage, setCurrentPage] = useState('search');
  const [documentType, setDocumentType] = useState('');
  const [series, setSeries] = useState('');
  const [number, setNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const documentData = {
    fullName: "Равченко Кирил Сергійович",
    birthDate: "04.09.1981",
    gender: "Чоловік",
    birthPlace: "м. Кривий Ріг",
    validFrom: "09.12.2025",
    validTo: "09.12.2035",
    issuedBy: "Відділ №10 м. Кривий Ріг"
  };

  const documentTypes = [
    "Паспорт громадянина України для виїзду за кордон",
    "Паспорт громадянина України у формі картки",
    "Тимчасове посвідчення громадянина України",
    "Посвідчення особи без громадянства для виїзду за кордон",
    "Посвідка на постійне проживання",
    "Посвідка на постійне проживання (біометрична)",
    "ID-картка іноземця",
    "Посвідчення біженця"
  ];

  const handleSearch = () => {
    if (documentType && series && number && captchaChecked) {
      if (series.toUpperCase() === 'FE' && number === '066131') {
        setCurrentPage('results');
      } else {
        alert('Документ не знайдено в базі даних');
      }
    } else {
      alert('Будь ласка, заповніть всі поля');
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetSearch = () => {
    setCurrentPage('search');
    setDocumentType('');
    setSeries('');
    setNumber('');
    setPhoto(null);
    setCaptchaChecked(false);
  };

  if (currentPage === 'search') {
    return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg" },
        React.createElement('div', { className: "max-w-4xl mx-auto px-6 py-6 flex items-center gap-4" },
          React.createElement('div', { className: "bg-white rounded-lg p-3 shadow-md" },
            React.createElement(FileText, { className: "w-8 h-8 text-blue-600" })
          ),
          React.createElement('div', null,
            React.createElement('h1', { className: "text-2xl font-bold" }, "Державна міграційна служба України"),
            React.createElement('p', { className: "text-blue-100 text-sm" }, "Перевірка дійсності документів")
          )
        )
      ),
      React.createElement('div', { className: "max-w-4xl mx-auto px-6 py-12" },
        React.createElement('div', { className: "bg-white rounded-2xl shadow-xl p-8" },
          React.createElement('div', { className: "flex items-center gap-3 mb-8" },
            React.createElement('div', { className: "bg-blue-100 rounded-full p-3" },
              React.createElement(Search, { className: "w-6 h-6 text-blue-600" })
            ),
            React.createElement('h2', { className: "text-3xl font-bold text-gray-800" }, "Перевірка за базою документів")
          ),
          React.createElement('div', { className: "space-y-6" },
            React.createElement('div', null,
              React.createElement('label', { className: "flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3" },
                React.createElement('span', { className: "bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" }, "1"),
                "Оберіть тип документа"
              ),
              React.createElement('select', {
                value: documentType,
                onChange: (e) => setDocumentType(e.target.value),
                className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700"
              },
                React.createElement('option', { value: "" }, "Оберіть тип документа"),
                documentTypes.map((type, index) =>
                  React.createElement('option', { key: index, value: type }, type)
                )
              )
            ),
            React.createElement('div', null,
              React.createElement('label', { className: "flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3" },
                React.createElement('span', { className: "bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" }, "2"),
                "Введіть серію та номер документа"
              ),
              React.createElement('div', { className: "grid grid-cols-2 gap-4" },
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm text-gray-600 mb-2" }, "Серія"),
                  React.createElement('input', {
                    type: "text",
                    value: series,
                    onChange: (e) => setSeries(e.target.value.toUpperCase()),
                    placeholder: "ЯЮ",
                    maxLength: 2,
                    className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all uppercase text-gray-700"
                  })
                ),
                React.createElement('div', null,
                  React.createElement('label', { className: "block text-sm text-gray-600 mb-2" }, "Номер"),
                  React.createElement('input', {
                    type: "text",
                    value: number,
                    onChange: (e) => setNumber(e.target.value),
                    placeholder: "6 цифр",
                    maxLength: 6,
                    className: "w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700"
                  })
                )
              )
            ),
            React.createElement('div', null,
              React.createElement('label', { className: "flex items-center gap-2 text-lg font-semibold text-gray-700 mb-3" },
                React.createElement('span', { className: "bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" }, "3"),
                "CAPTCHA"
              ),
              React.createElement('div', { className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg border-2 border-gray-300" },
                React.createElement('input', {
                  type: "checkbox",
                  checked: captchaChecked,
                  onChange: (e) => setCaptchaChecked(e.target.checked),
                  className: "w-5 h-5"
                }),
                React.createElement('span', { className: "text-gray-700" }, "Я не робот")
              )
            ),
            React.createElement('button', {
              onClick: handleSearch,
              className: "w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            },
              React.createElement(Search, { className: "w-5 h-5" }),
              "Перевірити документ"
            )
          ),
          React.createElement('div', { className: "mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600" },
            React.createElement('p', { className: "text-sm text-gray-600" },
              React.createElement('strong', null, "Тестові дані:"),
              " Серія: FE, Номер: 066131"
            )
          )
        )
      )
    );
  }

  // Сторінка результатів - продовження в наступному повідомленні через обмеження довжини
  return React.createElement('div', { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" },
    React.createElement('div', { className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg" },
      React.createElement('div', { className: "max-w-6xl mx-auto px-6 py-6 flex items-center gap-4" },
        React.createElement('div', { className: "bg-white rounded-lg p-3 shadow-md" },
          React.createElement(FileText, { className: "w-8 h-8 text-blue-600" })
        ),
        React.createElement('div', null,
          React.createElement('h1', { className: "text-2xl font-bold" }, "Державна міграційна служба України"),
          React.createElement('p', { className: "text-blue-100 text-sm" }, "Результати перевірки документа")
        )
      )
    ),
    React.createElement('div', { className: "max-w-6xl mx-auto px-6 py-12" },
      React.createElement('div', { className: "bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-8 flex items-center gap-4" },
        React.createElement(CheckCircle, { className: "w-12 h-12 text-green-600 flex-shrink-0" }),
        React.createElement('div', null,
          React.createElement('h2', { className: "text-2xl font-bold text-green-800" }, "Документ дійсний"),
          React.createElement('p', { className: "text-green-700" }, "Документ знайдено в базі даних та є чинним")
        )
      ),
      React.createElement('button', {
        onClick: resetSearch,
        className: "w-full bg-gray-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all shadow-lg mt-8"
      }, "Перевірити інший документ")
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(DocumentVerificationSystem));
