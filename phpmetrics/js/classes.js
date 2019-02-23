var classes = [
    {
        "name": "Planck\\Navigation\\Container",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadByDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getItemByName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getItems",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Navigation\\Item",
            "Planck\\Exception\\DoesNotExist"
        ],
        "parents": [],
        "lcom": 2,
        "length": 25,
        "vocabulary": 10,
        "volume": 83.05,
        "difficulty": 6,
        "effort": 498.29,
        "level": 0.17,
        "bugs": 0.03,
        "time": 28,
        "intelligentContent": 13.84,
        "number_operators": 7,
        "number_operands": 18,
        "number_operators_unique": 4,
        "number_operands_unique": 6,
        "cloc": 11,
        "loc": 39,
        "lloc": 28,
        "mi": 91.11,
        "mIwoC": 54.45,
        "commentWeight": 36.65,
        "kanDefect": 0.52,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 1.25,
        "relativeSystemComplexity": 2.25,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 5,
        "totalSystemComplexity": 9,
        "package": "Planck\\Navigation\\",
        "pageRank": 0.28,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Navigation\\Item",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "loadByDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityLoaderByDescriptor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setType",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRoute",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setParameter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLabel",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getURLByRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 5,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 2,
        "wmc": 16,
        "ccn": 9,
        "ccnMethodMax": 4,
        "externals": [
            "Planck\\Model\\EntityLoader",
            "Planck\\Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 96,
        "vocabulary": 24,
        "volume": 440.16,
        "difficulty": 7.4,
        "effort": 3257.16,
        "level": 0.14,
        "bugs": 0.15,
        "time": 181,
        "intelligentContent": 59.48,
        "number_operators": 22,
        "number_operands": 74,
        "number_operators_unique": 4,
        "number_operands_unique": 20,
        "cloc": 1,
        "loc": 76,
        "lloc": 75,
        "mi": 48.21,
        "mIwoC": 39.38,
        "commentWeight": 8.84,
        "kanDefect": 1.19,
        "relativeStructuralComplexity": 144,
        "relativeDataComplexity": 0.52,
        "relativeSystemComplexity": 144.52,
        "totalStructuralComplexity": 1152,
        "totalDataComplexity": 4.15,
        "totalSystemComplexity": 1156.15,
        "package": "Planck\\Navigation\\",
        "pageRank": 0.72,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    }
]