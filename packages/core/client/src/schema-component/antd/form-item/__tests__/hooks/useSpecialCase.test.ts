/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { transformValue } from '../../hooks/useSpecialCase';

describe('transformValue', () => {
  it('value is an array', () => {
    const value = [{ a: 3 }, { a: 4 }];
    const deps = {
      field: {
        value: [{ a: 1, b: 11 }],
      },
      subFieldSchema: {
        name: 'a',
      },
    };

    expect(transformValue(value, deps as any)).toMatchInlineSnapshot(`
      [
        {
          "a": {
            "a": 3,
          },
          "b": 11,
        },
        {
          "__notFromDatabase": true,
          "a": {
            "a": 4,
          },
          "b": 11,
        },
      ]
    `);
  });
});
