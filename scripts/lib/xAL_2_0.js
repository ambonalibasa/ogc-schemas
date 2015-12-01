var xAL_2_0_Module_Factory = function () {
  var xAL_2_0 = {
    n: 'xAL_2_0',
    dens: 'urn:oasis:names:tc:ciq:xsdschema:xAL:2.0',
    tis: [{
        ln: 'AddressDetails.PostalServiceElements.AddressLatitudeDirection',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise.PremiseNumberRange',
        tn: null,
        ps: [{
            n: 'premiseNumberRangeFrom',
            rq: true,
            en: 'PremiseNumberRangeFrom',
            ti: '.Premise.PremiseNumberRange.PremiseNumberRangeFrom'
          }, {
            n: 'premiseNumberRangeTo',
            rq: true,
            en: 'PremiseNumberRangeTo',
            ti: '.Premise.PremiseNumberRange.PremiseNumberRangeTo'
          }, {
            n: 'rangeType',
            an: {
              lp: 'RangeType'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'separator',
            an: {
              lp: 'Separator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurence',
            an: {
              lp: 'IndicatorOccurence'
            },
            t: 'a'
          }, {
            n: 'numberRangeOccurence',
            an: {
              lp: 'NumberRangeOccurence'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise.PremiseLocation',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostBox.PostBoxNumberPrefix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberPrefixSeparator',
            an: {
              lp: 'NumberPrefixSeparator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Locality',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'localityName',
            mno: 0,
            col: true,
            en: 'LocalityName',
            ti: '.Locality.LocalityName'
          }, {
            n: 'postBox',
            rq: true,
            en: 'PostBox',
            ti: '.PostBox'
          }, {
            n: 'largeMailUser',
            rq: true,
            en: 'LargeMailUser',
            ti: '.LargeMailUserType'
          }, {
            n: 'postOffice',
            rq: true,
            en: 'PostOffice',
            ti: '.PostOffice'
          }, {
            n: 'postalRoute',
            rq: true,
            en: 'PostalRoute',
            ti: '.PostalRouteType'
          }, {
            n: 'thoroughfare',
            en: 'Thoroughfare',
            ti: '.Thoroughfare'
          }, {
            n: 'premise',
            en: 'Premise',
            ti: '.Premise'
          }, {
            n: 'dependentLocality',
            en: 'DependentLocality',
            ti: '.DependentLocalityType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'usageType',
            an: {
              lp: 'UsageType'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise.PremiseNumberRange.PremiseNumberRangeFrom',
        tn: null,
        ps: [{
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'premiseNumberPrefix',
            mno: 0,
            col: true,
            en: 'PremiseNumberPrefix',
            ti: '.PremiseNumberPrefix'
          }, {
            n: 'premiseNumber',
            rq: true,
            col: true,
            en: 'PremiseNumber',
            ti: '.PremiseNumber'
          }, {
            n: 'premiseNumberSuffix',
            mno: 0,
            col: true,
            en: 'PremiseNumberSuffix',
            ti: '.PremiseNumberSuffix'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.SortingCode',
        tn: null,
        ps: [{
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostOffice',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'postOfficeName',
            mno: 0,
            col: true,
            en: 'PostOfficeName',
            ti: '.PostOffice.PostOfficeName'
          }, {
            n: 'postOfficeNumber',
            en: 'PostOfficeNumber',
            ti: '.PostOffice.PostOfficeNumber'
          }, {
            n: 'postalRoute',
            en: 'PostalRoute',
            ti: '.PostalRouteType'
          }, {
            n: 'postBox',
            en: 'PostBox',
            ti: '.PostBox'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.AddressLatitude',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.Country.CountryNameCode',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'scheme',
            an: {
              lp: 'Scheme'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType.SubPremiseName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'typeOccurrence',
            an: {
              lp: 'TypeOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AdministrativeArea.AdministrativeAreaName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thoroughfare',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'thoroughfareNumberOrThoroughfareNumberRange',
            mno: 0,
            col: true,
            etis: [{
                en: 'ThoroughfareNumber',
                ti: '.ThoroughfareNumber'
              }, {
                en: 'ThoroughfareNumberRange',
                ti: '.Thoroughfare.ThoroughfareNumberRange'
              }],
            t: 'es'
          }, {
            n: 'thoroughfareNumberPrefix',
            mno: 0,
            col: true,
            en: 'ThoroughfareNumberPrefix',
            ti: '.ThoroughfareNumberPrefix'
          }, {
            n: 'thoroughfareNumberSuffix',
            mno: 0,
            col: true,
            en: 'ThoroughfareNumberSuffix',
            ti: '.ThoroughfareNumberSuffix'
          }, {
            n: 'thoroughfarePreDirection',
            en: 'ThoroughfarePreDirection',
            ti: '.ThoroughfarePreDirectionType'
          }, {
            n: 'thoroughfareLeadingType',
            en: 'ThoroughfareLeadingType',
            ti: '.ThoroughfareLeadingTypeType'
          }, {
            n: 'thoroughfareName',
            mno: 0,
            col: true,
            en: 'ThoroughfareName',
            ti: '.ThoroughfareNameType'
          }, {
            n: 'thoroughfareTrailingType',
            en: 'ThoroughfareTrailingType',
            ti: '.ThoroughfareTrailingTypeType'
          }, {
            n: 'thoroughfarePostDirection',
            en: 'ThoroughfarePostDirection',
            ti: '.ThoroughfarePostDirectionType'
          }, {
            n: 'dependentThoroughfare',
            en: 'DependentThoroughfare',
            ti: '.Thoroughfare.DependentThoroughfare'
          }, {
            n: 'dependentLocality',
            rq: true,
            en: 'DependentLocality',
            ti: '.DependentLocalityType'
          }, {
            n: 'premise',
            rq: true,
            en: 'Premise',
            ti: '.Premise'
          }, {
            n: 'firm',
            rq: true,
            en: 'Firm',
            ti: '.FirmType'
          }, {
            n: 'postalCode',
            rq: true,
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'dependentThoroughfares',
            an: {
              lp: 'DependentThoroughfares'
            },
            t: 'a'
          }, {
            n: 'dependentThoroughfaresIndicator',
            an: {
              lp: 'DependentThoroughfaresIndicator'
            },
            t: 'a'
          }, {
            n: 'dependentThoroughfaresConnector',
            an: {
              lp: 'DependentThoroughfaresConnector'
            },
            t: 'a'
          }, {
            n: 'dependentThoroughfaresType',
            an: {
              lp: 'DependentThoroughfaresType'
            },
            t: 'a'
          }]
      }, {
        ln: 'CountryName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thoroughfare.ThoroughfareNumberRange.ThoroughfareNumberFrom',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: 'ThoroughfareNumberSuffix',
                ti: '.ThoroughfareNumberSuffix'
              }, {
                en: 'ThoroughfareNumber',
                ti: '.ThoroughfareNumber'
              }, {
                en: 'AddressLine',
                ti: '.AddressLine'
              }, {
                en: 'ThoroughfareNumberPrefix',
                ti: '.ThoroughfareNumberPrefix'
              }],
            t: 'ers'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareLeadingTypeType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'postalServiceElements',
            en: 'PostalServiceElements',
            ti: '.AddressDetails.PostalServiceElements'
          }, {
            n: 'address',
            rq: true,
            en: 'Address',
            ti: '.AddressDetails.Address'
          }, {
            n: 'addressLines',
            rq: true,
            en: 'AddressLines',
            ti: '.AddressLinesType'
          }, {
            n: 'country',
            rq: true,
            en: 'Country',
            ti: '.AddressDetails.Country'
          }, {
            n: 'administrativeArea',
            rq: true,
            en: 'AdministrativeArea',
            ti: '.AdministrativeArea'
          }, {
            n: 'locality',
            rq: true,
            en: 'Locality',
            ti: '.Locality'
          }, {
            n: 'thoroughfare',
            rq: true,
            en: 'Thoroughfare',
            ti: '.Thoroughfare'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'addressType',
            an: {
              lp: 'AddressType'
            },
            t: 'a'
          }, {
            n: 'currentStatus',
            an: {
              lp: 'CurrentStatus'
            },
            t: 'a'
          }, {
            n: 'validFromDate',
            an: {
              lp: 'ValidFromDate'
            },
            t: 'a'
          }, {
            n: 'validToDate',
            an: {
              lp: 'ValidToDate'
            },
            t: 'a'
          }, {
            n: 'usage',
            an: {
              lp: 'Usage'
            },
            t: 'a'
          }, {
            n: 'addressDetailsKey',
            an: {
              lp: 'AddressDetailsKey'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.Country',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'countryNameCode',
            mno: 0,
            col: true,
            en: 'CountryNameCode',
            ti: '.AddressDetails.Country.CountryNameCode'
          }, {
            n: 'countryName',
            mno: 0,
            col: true,
            en: 'CountryName',
            ti: '.CountryName'
          }, {
            n: 'administrativeArea',
            rq: true,
            en: 'AdministrativeArea',
            ti: '.AdministrativeArea'
          }, {
            n: 'locality',
            rq: true,
            en: 'Locality',
            ti: '.Locality'
          }, {
            n: 'thoroughfare',
            rq: true,
            en: 'Thoroughfare',
            ti: '.Thoroughfare'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.SupplementaryPostalServiceData',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'MailStopType.MailStopNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'nameNumberSeparator',
            an: {
              lp: 'NameNumberSeparator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType.SubPremiseNumberPrefix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberPrefixSeparator',
            an: {
              lp: 'NumberPrefixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Department',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'departmentName',
            mno: 0,
            col: true,
            en: 'DepartmentName',
            ti: '.Department.DepartmentName'
          }, {
            n: 'mailStop',
            en: 'MailStop',
            ti: '.MailStopType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfarePostDirectionType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode.PostalCodeNumberExtension',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'numberExtensionSeparator',
            an: {
              lp: 'NumberExtensionSeparator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalRouteType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'postalRouteName',
            rq: true,
            col: true,
            en: 'PostalRouteName',
            ti: '.PostalRouteType.PostalRouteName'
          }, {
            n: 'postalRouteNumber',
            rq: true,
            en: 'PostalRouteNumber',
            ti: '.PostalRouteType.PostalRouteNumber'
          }, {
            n: 'postBox',
            en: 'PostBox',
            ti: '.PostBox'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareTrailingTypeType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AdministrativeArea',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'administrativeAreaName',
            mno: 0,
            col: true,
            en: 'AdministrativeAreaName',
            ti: '.AdministrativeArea.AdministrativeAreaName'
          }, {
            n: 'subAdministrativeArea',
            en: 'SubAdministrativeArea',
            ti: '.AdministrativeArea.SubAdministrativeArea'
          }, {
            n: 'locality',
            rq: true,
            en: 'Locality',
            ti: '.Locality'
          }, {
            n: 'postOffice',
            rq: true,
            en: 'PostOffice',
            ti: '.PostOffice'
          }, {
            n: 'postalCode',
            rq: true,
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'usageType',
            an: {
              lp: 'UsageType'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'MailStopType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'mailStopName',
            en: 'MailStopName',
            ti: '.MailStopType.MailStopName'
          }, {
            n: 'mailStopNumber',
            en: 'MailStopNumber',
            ti: '.MailStopType.MailStopNumber'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'FirmType.FirmName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AdministrativeArea.SubAdministrativeArea.SubAdministrativeAreaName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode.PostTown.PostTownSuffix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalRouteType.PostalRouteNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberType',
            an: {
              lp: 'NumberType'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurrence',
            an: {
              lp: 'IndicatorOccurrence'
            },
            t: 'a'
          }, {
            n: 'numberOccurrence',
            an: {
              lp: 'NumberOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thoroughfare.ThoroughfareNumberRange.ThoroughfareNumberTo',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            col: true,
            dom: false,
            etis: [{
                en: 'ThoroughfareNumberSuffix',
                ti: '.ThoroughfareNumberSuffix'
              }, {
                en: 'ThoroughfareNumber',
                ti: '.ThoroughfareNumber'
              }, {
                en: 'AddressLine',
                ti: '.AddressLine'
              }, {
                en: 'ThoroughfareNumberPrefix',
                ti: '.ThoroughfareNumberPrefix'
              }],
            t: 'ers'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressLine',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'BuildingNameType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'typeOccurrence',
            an: {
              lp: 'TypeOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PremiseNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberType',
            an: {
              lp: 'NumberType'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurrence',
            an: {
              lp: 'IndicatorOccurrence'
            },
            t: 'a'
          }, {
            n: 'numberTypeOccurrence',
            an: {
              lp: 'NumberTypeOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalRouteType.PostalRouteName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostOffice.PostOfficeNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurrence',
            an: {
              lp: 'IndicatorOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'postalCodeNumber',
            mno: 0,
            col: true,
            en: 'PostalCodeNumber',
            ti: '.PostalCode.PostalCodeNumber'
          }, {
            n: 'postalCodeNumberExtension',
            mno: 0,
            col: true,
            en: 'PostalCodeNumberExtension',
            ti: '.PostalCode.PostalCodeNumberExtension'
          }, {
            n: 'postTown',
            en: 'PostTown',
            ti: '.PostalCode.PostTown'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise.PremiseNumberRange.PremiseNumberRangeTo',
        tn: null,
        ps: [{
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'premiseNumberPrefix',
            mno: 0,
            col: true,
            en: 'PremiseNumberPrefix',
            ti: '.PremiseNumberPrefix'
          }, {
            n: 'premiseNumber',
            rq: true,
            col: true,
            en: 'PremiseNumber',
            ti: '.PremiseNumber'
          }, {
            n: 'premiseNumberSuffix',
            mno: 0,
            col: true,
            en: 'PremiseNumberSuffix',
            ti: '.PremiseNumberSuffix'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.KeyLineCode',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PremiseNumberPrefix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'value',
            t: 'v'
          }, {
            n: 'numberPrefixSeparator',
            an: {
              lp: 'NumberPrefixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'XAL',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressDetails',
            rq: true,
            col: true,
            en: 'AddressDetails',
            ti: '.AddressDetails'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'version',
            an: {
              lp: 'Version'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'premiseName',
            mno: 0,
            col: true,
            en: 'PremiseName',
            ti: '.Premise.PremiseName'
          }, {
            n: 'premiseLocation',
            rq: true,
            en: 'PremiseLocation',
            ti: '.Premise.PremiseLocation'
          }, {
            n: 'premiseNumber',
            rq: true,
            col: true,
            en: 'PremiseNumber',
            ti: '.PremiseNumber'
          }, {
            n: 'premiseNumberRange',
            rq: true,
            en: 'PremiseNumberRange',
            ti: '.Premise.PremiseNumberRange'
          }, {
            n: 'premiseNumberPrefix',
            mno: 0,
            col: true,
            en: 'PremiseNumberPrefix',
            ti: '.PremiseNumberPrefix'
          }, {
            n: 'premiseNumberSuffix',
            mno: 0,
            col: true,
            en: 'PremiseNumberSuffix',
            ti: '.PremiseNumberSuffix'
          }, {
            n: 'buildingName',
            mno: 0,
            col: true,
            en: 'BuildingName',
            ti: '.BuildingNameType'
          }, {
            n: 'subPremise',
            mno: 0,
            col: true,
            en: 'SubPremise',
            ti: '.SubPremiseType'
          }, {
            n: 'firm',
            en: 'Firm',
            ti: '.FirmType'
          }, {
            n: 'mailStop',
            en: 'MailStop',
            ti: '.MailStopType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'premise',
            en: 'Premise',
            ti: '.Premise'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'premiseDependency',
            an: {
              lp: 'PremiseDependency'
            },
            t: 'a'
          }, {
            n: 'premiseDependencyType',
            an: {
              lp: 'PremiseDependencyType'
            },
            t: 'a'
          }, {
            n: 'premiseThoroughfareConnector',
            an: {
              lp: 'PremiseThoroughfareConnector'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.AddressLongitude',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.Barcode',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareNameType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressLinesType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            rq: true,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }]
      }, {
        ln: 'Department.DepartmentName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'LargeMailUserType.LargeMailUserIdentifier',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareNumberPrefix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberPrefixSeparator',
            an: {
              lp: 'NumberPrefixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.EndorsementLineCode',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfareNumberSuffix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberSuffixSeparator',
            an: {
              lp: 'NumberSuffixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'DependentLocalityType.DependentLocalityNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'nameNumberOccurrence',
            an: {
              lp: 'NameNumberOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.AddressLongitudeDirection',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostBox.PostBoxNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostBox.PostBoxNumberSuffix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberSuffixSeparator',
            an: {
              lp: 'NumberSuffixSeparator'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'LargeMailUserType.LargeMailUserName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode.PostalCodeNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thoroughfare.ThoroughfareNumberRange',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'thoroughfareNumberFrom',
            rq: true,
            en: 'ThoroughfareNumberFrom',
            ti: '.Thoroughfare.ThoroughfareNumberRange.ThoroughfareNumberFrom'
          }, {
            n: 'thoroughfareNumberTo',
            rq: true,
            en: 'ThoroughfareNumberTo',
            ti: '.Thoroughfare.ThoroughfareNumberRange.ThoroughfareNumberTo'
          }, {
            n: 'rangeType',
            an: {
              lp: 'RangeType'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'separator',
            an: {
              lp: 'Separator'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurrence',
            an: {
              lp: 'IndicatorOccurrence'
            },
            t: 'a'
          }, {
            n: 'numberRangeOccurrence',
            an: {
              lp: 'NumberRangeOccurrence'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'DependentLocalityType.DependentLocalityName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'MailStopType.MailStopName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressIdentifier',
            mno: 0,
            col: true,
            en: 'AddressIdentifier',
            ti: '.AddressDetails.PostalServiceElements.AddressIdentifier'
          }, {
            n: 'endorsementLineCode',
            en: 'EndorsementLineCode',
            ti: '.AddressDetails.PostalServiceElements.EndorsementLineCode'
          }, {
            n: 'keyLineCode',
            en: 'KeyLineCode',
            ti: '.AddressDetails.PostalServiceElements.KeyLineCode'
          }, {
            n: 'barcode',
            en: 'Barcode',
            ti: '.AddressDetails.PostalServiceElements.Barcode'
          }, {
            n: 'sortingCode',
            en: 'SortingCode',
            ti: '.AddressDetails.PostalServiceElements.SortingCode'
          }, {
            n: 'addressLatitude',
            en: 'AddressLatitude',
            ti: '.AddressDetails.PostalServiceElements.AddressLatitude'
          }, {
            n: 'addressLatitudeDirection',
            en: 'AddressLatitudeDirection',
            ti: '.AddressDetails.PostalServiceElements.AddressLatitudeDirection'
          }, {
            n: 'addressLongitude',
            en: 'AddressLongitude',
            ti: '.AddressDetails.PostalServiceElements.AddressLongitude'
          }, {
            n: 'addressLongitudeDirection',
            en: 'AddressLongitudeDirection',
            ti: '.AddressDetails.PostalServiceElements.AddressLongitudeDirection'
          }, {
            n: 'supplementaryPostalServiceData',
            mno: 0,
            col: true,
            en: 'SupplementaryPostalServiceData',
            ti: '.AddressDetails.PostalServiceElements.SupplementaryPostalServiceData'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostOffice.PostOfficeName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType.SubPremiseNumberSuffix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberSuffixSeparator',
            an: {
              lp: 'NumberSuffixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostBox',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'postBoxNumber',
            rq: true,
            en: 'PostBoxNumber',
            ti: '.PostBox.PostBoxNumber'
          }, {
            n: 'postBoxNumberPrefix',
            en: 'PostBoxNumberPrefix',
            ti: '.PostBox.PostBoxNumberPrefix'
          }, {
            n: 'postBoxNumberSuffix',
            en: 'PostBoxNumberSuffix',
            ti: '.PostBox.PostBoxNumberSuffix'
          }, {
            n: 'postBoxNumberExtension',
            en: 'PostBoxNumberExtension',
            ti: '.PostBox.PostBoxNumberExtension'
          }, {
            n: 'firm',
            en: 'Firm',
            ti: '.FirmType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'Premise.PremiseName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'typeOccurrence',
            an: {
              lp: 'TypeOccurrence'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'LargeMailUserType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'largeMailUserName',
            mno: 0,
            col: true,
            en: 'LargeMailUserName',
            ti: '.LargeMailUserType.LargeMailUserName'
          }, {
            n: 'largeMailUserIdentifier',
            en: 'LargeMailUserIdentifier',
            ti: '.LargeMailUserType.LargeMailUserIdentifier'
          }, {
            n: 'buildingName',
            mno: 0,
            col: true,
            en: 'BuildingName',
            ti: '.BuildingNameType'
          }, {
            n: 'department',
            en: 'Department',
            ti: '.Department'
          }, {
            n: 'postBox',
            en: 'PostBox',
            ti: '.PostBox'
          }, {
            n: 'thoroughfare',
            en: 'Thoroughfare',
            ti: '.Thoroughfare'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'ThoroughfarePreDirectionType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'Thoroughfare.DependentThoroughfare',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'thoroughfarePreDirection',
            en: 'ThoroughfarePreDirection',
            ti: '.ThoroughfarePreDirectionType'
          }, {
            n: 'thoroughfareLeadingType',
            en: 'ThoroughfareLeadingType',
            ti: '.ThoroughfareLeadingTypeType'
          }, {
            n: 'thoroughfareName',
            mno: 0,
            col: true,
            en: 'ThoroughfareName',
            ti: '.ThoroughfareNameType'
          }, {
            n: 'thoroughfareTrailingType',
            en: 'ThoroughfareTrailingType',
            ti: '.ThoroughfareTrailingTypeType'
          }, {
            n: 'thoroughfarePostDirection',
            en: 'ThoroughfarePostDirection',
            ti: '.ThoroughfarePostDirectionType'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode.PostTown',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'postTownName',
            mno: 0,
            col: true,
            en: 'PostTownName',
            ti: '.PostalCode.PostTown.PostTownName'
          }, {
            n: 'postTownSuffix',
            en: 'PostTownSuffix',
            ti: '.PostalCode.PostTown.PostTownSuffix'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'AdministrativeArea.SubAdministrativeArea',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'subAdministrativeAreaName',
            mno: 0,
            col: true,
            en: 'SubAdministrativeAreaName',
            ti: '.AdministrativeArea.SubAdministrativeArea.SubAdministrativeAreaName'
          }, {
            n: 'locality',
            rq: true,
            en: 'Locality',
            ti: '.Locality'
          }, {
            n: 'postOffice',
            rq: true,
            en: 'PostOffice',
            ti: '.PostOffice'
          }, {
            n: 'postalCode',
            rq: true,
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'usageType',
            an: {
              lp: 'UsageType'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'FirmType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'firmName',
            mno: 0,
            col: true,
            en: 'FirmName',
            ti: '.FirmType.FirmName'
          }, {
            n: 'department',
            mno: 0,
            col: true,
            en: 'Department',
            ti: '.Department'
          }, {
            n: 'mailStop',
            en: 'MailStop',
            ti: '.MailStopType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'Locality.LocalityName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.Address',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType.SubPremiseNumber',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }, {
            n: 'indicatorOccurrence',
            an: {
              lp: 'IndicatorOccurrence'
            },
            t: 'a'
          }, {
            n: 'numberTypeOccurrence',
            an: {
              lp: 'NumberTypeOccurrence'
            },
            t: 'a'
          }, {
            n: 'premiseNumberSeparator',
            an: {
              lp: 'PremiseNumberSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'subPremiseName',
            mno: 0,
            col: true,
            en: 'SubPremiseName',
            ti: '.SubPremiseType.SubPremiseName'
          }, {
            n: 'subPremiseLocation',
            rq: true,
            en: 'SubPremiseLocation',
            ti: '.SubPremiseType.SubPremiseLocation'
          }, {
            n: 'subPremiseNumber',
            mno: 0,
            col: true,
            en: 'SubPremiseNumber',
            ti: '.SubPremiseType.SubPremiseNumber'
          }, {
            n: 'subPremiseNumberPrefix',
            mno: 0,
            col: true,
            en: 'SubPremiseNumberPrefix',
            ti: '.SubPremiseType.SubPremiseNumberPrefix'
          }, {
            n: 'subPremiseNumberSuffix',
            mno: 0,
            col: true,
            en: 'SubPremiseNumberSuffix',
            ti: '.SubPremiseType.SubPremiseNumberSuffix'
          }, {
            n: 'buildingName',
            mno: 0,
            col: true,
            en: 'BuildingName',
            ti: '.BuildingNameType'
          }, {
            n: 'firm',
            en: 'Firm',
            ti: '.FirmType'
          }, {
            n: 'mailStop',
            en: 'MailStop',
            ti: '.MailStopType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'subPremise',
            en: 'SubPremise',
            ti: '.SubPremiseType'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostalCode.PostTown.PostTownName',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PostBox.PostBoxNumberExtension',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberExtensionSeparator',
            an: {
              lp: 'NumberExtensionSeparator'
            },
            t: 'a'
          }]
      }, {
        ln: 'AddressDetails.PostalServiceElements.AddressIdentifier',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'identifierType',
            an: {
              lp: 'IdentifierType'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'DependentLocalityType',
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'addressLine',
            mno: 0,
            col: true,
            en: 'AddressLine',
            ti: '.AddressLine'
          }, {
            n: 'dependentLocalityName',
            mno: 0,
            col: true,
            en: 'DependentLocalityName',
            ti: '.DependentLocalityType.DependentLocalityName'
          }, {
            n: 'dependentLocalityNumber',
            en: 'DependentLocalityNumber',
            ti: '.DependentLocalityType.DependentLocalityNumber'
          }, {
            n: 'postBox',
            rq: true,
            en: 'PostBox',
            ti: '.PostBox'
          }, {
            n: 'largeMailUser',
            rq: true,
            en: 'LargeMailUser',
            ti: '.LargeMailUserType'
          }, {
            n: 'postOffice',
            rq: true,
            en: 'PostOffice',
            ti: '.PostOffice'
          }, {
            n: 'postalRoute',
            rq: true,
            en: 'PostalRoute',
            ti: '.PostalRouteType'
          }, {
            n: 'thoroughfare',
            en: 'Thoroughfare',
            ti: '.Thoroughfare'
          }, {
            n: 'premise',
            en: 'Premise',
            ti: '.Premise'
          }, {
            n: 'dependentLocality',
            en: 'DependentLocality',
            ti: '.DependentLocalityType'
          }, {
            n: 'postalCode',
            en: 'PostalCode',
            ti: '.PostalCode'
          }, {
            n: 'any',
            mno: 0,
            col: true,
            dom: false,
            mx: false,
            t: 'ae'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'usageType',
            an: {
              lp: 'UsageType'
            },
            t: 'a'
          }, {
            n: 'connector',
            an: {
              lp: 'Connector'
            },
            t: 'a'
          }, {
            n: 'indicator',
            an: {
              lp: 'Indicator'
            },
            t: 'a'
          }]
      }, {
        ln: 'SubPremiseType.SubPremiseLocation',
        tn: null,
        ps: [{
            n: 'content',
            t: 'v'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }, {
        ln: 'PremiseNumberSuffix',
        tn: null,
        ps: [{
            n: 'otherAttributes',
            t: 'aa'
          }, {
            n: 'content',
            t: 'v'
          }, {
            n: 'numberSuffixSeparator',
            an: {
              lp: 'NumberSuffixSeparator'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'Type'
            },
            t: 'a'
          }, {
            n: 'code',
            an: {
              lp: 'Code'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'Thoroughfare',
        ti: '.Thoroughfare'
      }, {
        en: 'ThoroughfareNumber',
        ti: '.ThoroughfareNumber'
      }, {
        en: 'Department',
        ti: '.Department'
      }, {
        en: 'PostOffice',
        ti: '.PostOffice'
      }, {
        en: 'AddressLine',
        ti: '.AddressLine'
      }, {
        en: 'CountryName',
        ti: '.CountryName'
      }, {
        en: 'Locality',
        ti: '.Locality'
      }, {
        en: 'PostalCode',
        ti: '.PostalCode'
      }, {
        en: 'AddressDetails',
        ti: '.AddressDetails'
      }, {
        en: 'PremiseNumberSuffix',
        ti: '.PremiseNumberSuffix'
      }, {
        en: 'Premise',
        ti: '.Premise'
      }, {
        en: 'PremiseNumberPrefix',
        ti: '.PremiseNumberPrefix'
      }, {
        en: 'PremiseNumber',
        ti: '.PremiseNumber'
      }, {
        en: 'AdministrativeArea',
        ti: '.AdministrativeArea'
      }, {
        en: 'ThoroughfareNumberPrefix',
        ti: '.ThoroughfareNumberPrefix'
      }, {
        en: 'ThoroughfareNumberSuffix',
        ti: '.ThoroughfareNumberSuffix'
      }, {
        en: 'xAL',
        ti: '.XAL'
      }, {
        en: 'PostBox',
        ti: '.PostBox'
      }]
  };
  return {
    xAL_2_0: xAL_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], xAL_2_0_Module_Factory);
}
else {
  var xAL_2_0_Module = xAL_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.xAL_2_0 = xAL_2_0_Module.xAL_2_0;
  }
  else {
    var xAL_2_0 = xAL_2_0_Module.xAL_2_0;
  }
}