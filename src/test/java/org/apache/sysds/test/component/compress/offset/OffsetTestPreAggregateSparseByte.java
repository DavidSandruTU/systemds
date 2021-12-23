/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package org.apache.sysds.test.component.compress.offset;

import static org.junit.Assert.fail;

import org.apache.sysds.runtime.compress.colgroup.offset.OffsetFactory.OFF_TYPE;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

@RunWith(value = Parameterized.class)
public class OffsetTestPreAggregateSparseByte extends OffsetTestPreAggregateSparse {

	public OffsetTestPreAggregateSparseByte(int[] data, OFF_TYPE type) {
		super(data, type);
	}

	protected void preAggMapRow(int row){
		try {
			double[] preAV = new double[1];
			byte[] m = new byte[data.length];
			// a.preAggregateDenseMap(this.leftM, preAV, row, 1 + row, 0, leftM.getNumColumns(), 0, m);
			a.preAggregateSparseMap(this.leftM.getSparseBlock(), preAV, row, 1 + row, 0, m);
			verifyPreAggMapRow(preAV, row);
		}
		catch(Exception e) {
			e.printStackTrace();
			fail(e.toString());
		}
	}

	@Override
	public void preAggMapAllRows() {
		double[] preAV = new double[4];
		byte[] m = new byte[data.length];
		a.preAggregateSparseMap(this.leftM.getSparseBlock(), preAV, 0, 2, 0, m);
		verifyPreAggMapAllRow(preAV);
	}

}
