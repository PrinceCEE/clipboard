# Data is saved in the Facility_Agents table

# Update getShiftsByFacility

# Update generateReport

## Ticket breakdown

### Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

#### Add new table 'Facility_Agent' with a one-to-one relationship to the Agents table

- Takes ~10mins

#### Update the Shift table schema to have the facility_agent as a foreign key

- Takes ~10mins

#### Run a migration script to populate the Facility_Agent and Shift tables

- The facility_agent table should contain the agent_id, facility_id and shift_id as foreign keys
- The Shift table should contain the facility_agent as a foreign key
- Takes ~10mins

#### Save data in the Facilities, Agents, Shifts and Facility_Agents tables

- Update the flow for how the entities are saved, to encompass saving the facility_agents and adding the necessary data based on the updated Schema of Shift table.
- Takes ~20mins

#### Update the getShiftsByFacility function

- Should contain the facility_agent field in the returned Shifts

#### Update the generateReport
